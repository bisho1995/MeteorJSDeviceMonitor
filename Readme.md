# Tools Used
Project has been made with meteorjs and reactjs.

# Steps
1. Install meteorjs in your system. Follow these steps https://www.meteor.com/install
2. curl https://install.meteor.com/ | sh  (use this to install meteorjs into your system if you are using mac or linux)
3. After making sure you have meteor js installed, cd into the directory and run the command 
<br>
meteor npm install
<br>
This will install the meteor npm modules. 

4. Final step is in the command prompt or terminal type meteor.
5. This will start the server at http://localhost:3000/
6. Hit the url and you can see the app running.
7. First time you load the application you will not see any data as the mongodb is empty. 
8. Use postman or something else and hit the url 
localhost:3000/api/cc/device/:id
replace id with (1 or 2 or 3 or whatever)
9. Send data as json body of postman x-www-form-urlencoded with data being
10. temperature : 40 (say) and humidity : 33 (say)
11. If you get a message on postman like 
{
    "message": "recorded"
}
The message is saved to mongodb.
12. You can see this device in your web application frontend now.
13. Double click on the device id and you can see the corresponding data.


# How the application works
1. On the left side you have the list of ids.
2. Select a particular id and the corresponding data for the ID will show up on the right side.
3. To view the data of a different device double click on the device ID.
4. The app automatically updates data as and when it gets data from IOT devices (here it can be reproduced with hitting a post request endpoint)

# Bug
1. I messed up setting up redux with the application (still new to react) so instead of single clicking on the device ID you need to double click on the device ID and the corresponding data will be shown in the right side.
