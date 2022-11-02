# AngularQuizApp

![](https://github.com/JWoltjen/Angular-QuizApp/blob/main/quizAppRecording.gif)


##Component Directives
One of the new things I learned during this project was how to implement a component directive. In this application, we want to change the css properties of the options depending on whether the user selects the right or wrong answer. If the answer is correct, the background will be displayed as green. If incorrect, the background will be displayed as red. We achieved this effect by using a component directive called appChangeBg. We added an @Input type called isCorrect and set it to a boolean. In the constructor, we added two parameters, el of type ElementRef, and render of type Renderer2, both imported from Angular Core. The @HostListener listens for click to be called on the answer() method. If this.isCorrect is true, we call "this.render.setStyle(this.el.nativeElement, .......) this allows us to render the style of the ElementRef for the element on which the component directive lives!! That's a really cool way to add conditional logic to a style change on the DOM and something i hadn't learned before this project.
