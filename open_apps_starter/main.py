import os
import eel

# init web directory has to be absolute path otherwise it wont work from root
eel.init("/home/pi/Documents/js_scripts/electron_ui/open_apps_starter/web_client")

@eel.expose
def confirmClosePi():
    # python way of calling shell
    print(f"closing Pi")
    # call shell directly from build-in os package
    os.system("sudo shutdown -h now")
    


@eel.expose
def openApp(app):
    # call shell directly from build-in os package
    os.system(f"cd /home/pi/Documents/js_scripts/electron_ui/{app} && npm run app-image")
    # python way of calling shell
    print(f"starting {app}")


# start the entry file index.html file from web_client directory
eel.start("/index.html",port=9000, size=(780, 430), position=(10, 10))
