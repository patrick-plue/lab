import time
from os import system, name
import sys
import signal


#just to test things
seconds_per_minute = 60
minutes_per_session= 30
minutes_per_break = 5


try:
    user_choice = input("Do you want to start the timer?: ");
    user_choice = user_choice.lower()
    if user_choice == "no" or user_choice == "n": exit()


    print(user_choice)
    def clear():

    # for windows
        if name == 'nt':
            _ = system('cls')

    # for mac and linux(here, os.name is 'posix')
        else:
            _ = system('clear')


    while user_choice == "yes" or user_choice == "y":
        clear()
        for i in range(minutes_per_session +1):
            print("Session:", i, "minutes")
            time.sleep(seconds_per_minute)
            clear()

    for  i in range(minutes_per_break +1):
        print("Break:", i, "minutes")
        time.sleep(seconds_per_minute)
        clear()
    user_choice = input("Do you want another session?: yes or no? ")

except KeyboardInterrupt:
    print("\nExiting")
    exit(0)