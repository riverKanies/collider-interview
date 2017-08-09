Install:
'git clone git@github.com:riverKanies/collider-interview.git'

Run:
'meteor'
-note: you may need to install packages:
  -'meteor add practicalmeteor:mocha'
  -it may propt you to install the babel runtime

Test:
'meteor test --driver-package practicalmeteor:mocha'
-note: There are no useful tests, I didn't have time to write any

Sources:
The .stl viewing logic is from https://gist.github.com/bellbind/477817982584ac8473ef/
- client/lib/load2_STLLoader.js
- client/lib/load1_three.min.js
- the main <script> in index.html

Description:
- Why meteor: I chose meteor because it has a bunch of great stuff out of the box such as reactivity and easy to use testing frameworks. It's also great for small prototype apps because it has a flexible code structure (a full-stack app could be written in a single file) and quick to use db system.
- Overall approach to project: honestly, I just focused on getting the functionality in there. Code organization and testing could be greatly improved but I barely got it working in the time allowed so it is what it is.
- Code structure: all the relevant code is in two files in the client folder. The main.html file has all view logic and a script for the .stl viewer. the main.js file has the code that tracks state and saves data (yeah, you can hit the db from the client with meteor). File storage is handled with FileStack.
- Unexpected setbacks: I ended up using Blaze for reactive templating which was probably not ideal since I'm much more experienced with React (I spent a good deal of time just getting the reactivity to work right). However, I feel like every project involves new tech and I think that overall this is still a good representation of what I can do in 5 hrs.
