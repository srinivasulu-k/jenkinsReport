'''
Created on March 23, 2021

@author: Srinivasulu
'''

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.wait import WebDriverWait
from time import sleep
import openpyxl 
import sys
import string
from datetime import date
import os

buildURL = "http://na1qalabd1:8080/job/DAM%20Smoke%20Tests%20UAT/65/"
print("URL:" + buildURL)

print("Execution Started")
driver=webdriver.Chrome(executable_path="C:\\wamp64\\www\\jenkinsReport\\webDriver\\chromedriver.exe")
driver.implicitly_wait(10)
driver.maximize_window()
driver.get( buildURL + "timestamps/?elapsed=HH:mm:ss.S" )

txtTimeContent=str(driver.find_element_by_tag_name("pre").text)
txtTimeElapsed=txtTimeContent.splitlines()[-1]
print("Total Time: "+txtTimeElapsed)

driver.get( buildURL + "logText/progressiveText?start=0" )

txtContent=str(driver.find_element_by_tag_name("pre").text)
# txtTestCount1=txtContent.split("Results:")
# txtTestCount2=txtTestCount1[-1]
# txtTestCount=txtTestCount2.splitlines()[2]

resultsLine=(txtContent.split("run:")[-1])
print("Line- "+resultsLine)

resultsLine=resultsLine.split(", ")
totalTests=(resultsLine[0]).split(" ")[-1]
totalFailures=(resultsLine[1]).split(" ")[-1]
totalError=(resultsLine[2]).split(" ")[-1]
totalSkipped=((resultsLine[3]).split("\n")[0]).split(" ")[-1]

print("Total Tests--"+totalTests+"--")
print("Total Failures--"+totalFailures+"--")
print("Total Errors--"+totalError+"--")
print("Total Skipped--"+totalSkipped+"--")

print("Execution Completed")

driver.close()
