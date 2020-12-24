function eventfn(event){
  if (event.keyCode === 13) {
    exec();
  } else {
    null
  }
  function exec() {
  var msg = new SpeechSynthesisUtterance();
  var prefix = "?"
  var fetch = document.getElementById("output");
  var command = document.getElementById("input").value;
  var jokes = ["What do you call a dinosaur that is sleeping?<br>A dino-snore!", 
"What is fast, loud and crunchy?<br>A rocket chip!", "Why did the teddy bear say no to dessert?<br>Because she was stuffed.", 
"What has ears but cannot hear?<br>A cornfield.", "What did the left eye say to the right eye?<br>Between us, something smells!", 
"What do you get when you cross a vampire and a snowman?<br>Frost bite!", "What did one plate say to the other plate?<br>Dinner is on me!", 
"Why did the student eat his homework?<br>Because the teacher told him it was a piece of cake!", "When you look for something, why is it always in the last place you look?<br>Because when you find it, you stop looking.", 
"What is brown, hairy and wears sunglasses?<br>A coconut on vacation.", "Two pickles fell out of a jar onto the floor. What did one say to the other?<br>Dill with it.", 
"What did the Dalmatian say after lunch?<br>That hit the spot!"]
  let res = ""
  let res1 = ""
  switch (command) {
    //text commands
    case (prefix + "buh"):
      res = "What?"
      break;
    //reload
    case (prefix + "reload"):
      window.location.reload();
      break;
    //jokes
    case (prefix + "joke"):
      res = jokes[Math.floor(Math.random() * 6)];
      break;
    //urls
    case (prefix + "youtube.url"):
      res = "<a href='https://www.youtube.com'>Youtube</a>";
      break;
    //location
    case (prefix + "current.url"):
      res = window.location.href;
      break;
    case (prefix + "current.hostname"):
      res = window.location.hostname;
      break;
    case (prefix + "current.pathname"):
      res = window.location.pathname;
      break;
    case (prefix + "current.protocol"):
      res = window.location.protocol;
      break;
    default:
      res = "sorry, that's not a valid command!"
  }
  fetch.innerHTML = res;
}
}