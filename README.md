# Ionic view caches
This project demonstrates the Ionic view cache behaviour. It is based on the tabs -template. In the application there are three tabs, where first tab is using the cache as it is by deafult. The second tab is using the cache-view=false directive in the ion-view. The third tab is doing data reloads based on the 'enter' -event. 

The application connects to the http://api.randomuser.me/ to get random data and to demonstrate how view caching can cause you some problems, if you are not aware of its behaviour. The common question is "why my views are not updating?" or "why my controller is not being executed when the state/view is activated?" - the reason is the view cache, which is not so easy to find out from Ionic documentation in the beginning. 

## Installation 
Download or clone the project. Make sure you have ionic installed. Then you can to the project root folder and run ´ionic serve´ to launch the app in browser.  