# AngularQuizApp

![](https://github.com/JWoltjen/Angular-QuizApp/blob/main/quizAppRecording.gif)


## Component Directives
One of the new things I learned during this project was how to implement a component directive. In this application, we want to change the css properties of the options depending on whether the user selects the right or wrong answer. If the answer is correct, the background will be displayed as green. If incorrect, the background will be displayed as red. We achieved this effect by using a component directive called appChangeBg. We added an @Input decorator called isCorrect and set it to a boolean. In the constructor, we added two parameters, el of type ElementRef, and render of type Renderer2, both imported from Angular Core. The @HostListener decorator listens for click to be called on the answer() method. If this.isCorrect is true, we call "this.render.setStyle(this.el.nativeElement, .......) this allows us to render the style of the ElementRef for the element on which the component directive lives!! That's a really cool way to add conditional logic to a style change on the DOM and something i hadn't learned before this project.
![Component Directive](https://github.com/JWoltjen/Angular-QuizApp/blob/main/componentDirective.JPG)


## ElementRef to Grab Player Name
This application stores the name the user enters in local storage. To reference this stored value, the Welcome component makes use of @ViewChild decorator, attaching it to the ('name') html element, and assigns it to the local property nameKey of type ElementRef. When the user fires the startQuiz method, it triggers localStorage.setItem("name", this.nameKey.nativeElement.value) and voila, the name stored in local storage can now be interpolated in the HTML. 

![ElementRef](https://github.com/JWoltjen/Angular-QuizApp/blob/main/elementRefnameKey.JPG)


