# Flatfile Technical Challenge - Implemention Review

Author: Christian Carlson
<br>Contact: christian.a.carlson@gmail.com

STEPS:
1) Review Documentation
2) Research Functionality
3) Setup Environment
4) Start Applications
5) Baseline / Check Console / Check Logs
6) Feature Development
7) Test Features
8) Commit, PR
9) Documentation

-------
1) **Review Documentation** 📖
	<br>I began by reviewing the technical challenge documentation. I Identified the objective to implement 1-2 of 2 features as outlined:
	* Drag-and-drop
	* Detail View
	  
	I have implemented plenty of modal windows in the past so that task was going to be straight forward. I had not implemented drag-and-drop in React before so this would be require more time and certainly be more fun!

2) **Research Functionality** 👓
	<br>Primarily focused on the available functionality, and latest implementation technique(s) in React. Understanding available events, handlers, and data exchange. This was a generic Google search, used sites like StackOverflow, and GitHub.

3) **Environment Setup** ⚙️
	<br>Environment setup was generally straight forward. I was not successful running the migration commands as prescribed, using the NPM command. I was able to run them successfully using the TypeORM CLI directly. I didn't want to spend too much time with environment setup and configuration. Running a migration successfully was enough at this point, despite the command.
	* Encountered with issue with migrations 
		  - Modified dbconfig.ts to use CommonJS syntax
   
4) **Start Applications** 🏃‍♂️
   * Off and running
 
5) **Baseline** 📈
   <br>Hit the exposed port on the web application from the browser. Check the browser console, and network and check the docker logs, to get a baseline.
   
6) **Feature Development** 👨‍💻 
   <br>Implemented Drag and Drop first. I initially found an issue in the web app was with the App module.
   - Issue: useEffect() cycle
	   * Fix: \[], added dependency array (https://shrtm.nu/u6b)
   - Added "moveCard" service to the server
   - Added "description" field to db and card entity
   - Added lookup function to get the Section name by Id
   - Added modal component and related functions to display card detail

7) **Test Features** 🧪
	<br>Initial testing was positive. D-n-D and Modal functionality worked as expected.
	Additional testing found a bug creating the card. Fixed by making the field optional 
	
1) **Commit, PR**
	<br>https://github.com/FlatFilers/flatfile-technical/pull/16
   
9) **Documentation**
	* Yep, that's what I'm doing now ;-)