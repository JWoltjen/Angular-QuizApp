import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name : string = ""; 
  public questionList : any = []; 
  public currentQuestion : number = 0;
  public points : number = 0; 
  counter = 60; 
  correctAnswer:number = 0;
  wrongAnswer:number = 0;
  interval$:any
  progress:string = '0';
  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!; 
    this.getAllQuestions(); 
    this.startCounter(); 
  }
  getAllQuestions(){
    this.questionService.getQuestionJson()
    .subscribe(res=>{
      this.questionList = res.questions; 
    })
  }
  nextQuestion(){
    this.currentQuestion++
  }
  previousQuestion(){
    this.currentQuestion--
    this.getProgress(); 
  }
  answer(currentQuestion:number, option:any){
    if(option.correct){
      this.points += 10;
      this.correctAnswer++; 
      this.nextQuestion(); 
    }else{
      this.points-=10;
      this.wrongAnswer+=1; 
      this.nextQuestion(); 
    }
    this.getProgress(); 
  }
  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.counter--; 
      if(this.counter == 0){
        this.points-=10;
        this.wrongAnswer++;
        this.counter=60;
        this.nextQuestion();
      }
    });
    setTimeout(() =>{
      this.stopCounter(); 
    }, 600000);
  }
  stopCounter(){
    this.interval$.unsubscribe(); 
    this.counter = 0;
  }
  resetCounter(){
    this.stopCounter(); 
    this.counter = 60;
    this.startCounter(); 
  }
  resetQuiz(){
    this.resetCounter(); 
    this.getAllQuestions(); 
    this.points = 0; 
    this.currentQuestion = 0; 
  }
  getProgress(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString(); 
    return this.progress;
  }
}
