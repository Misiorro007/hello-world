![hello-world](https://user-images.githubusercontent.com/87083751/128036298-b70da39c-f438-4c85-a1d8-1c814b272d87.gif)

# hello-world!
Just a first test repository

Nothing special to tell about me - just a simple guy with who is living his life and is happy about it :) 
<p>
what i ❤️ is: -> ⚽ 🎾 🏊 🍷 👯 🇵🇱 🇭🇷 
  <p>
I have a 🐶 named Koko -> probably you will see him here one day 🤠
    
body {
  font-family: "Lato", sans-serif;
}
.jumbotron {
  width: 400px;
  margin: 20px auto;
}

    <div ng-app="iNeedWork">
  <div class="jumbotron" ng-controller="iNeedWorkController">
    <button ng-click="sendTheJobAlert()"class="btn btn-danger btn-block" type="submit">Hey, Click Here!</button>
  </div>
</div>

angular.module("iNeedWork", []);
angular.module("iNeedWork").controller("iNeedWorkController", ($scope) => {
  function sendTheJobAlert() {
    alert("I'm looking for job!");
  }

  $scope.sendTheJobAlert = sendTheJobAlert;
});
