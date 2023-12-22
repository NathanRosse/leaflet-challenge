# leaflet-challenge

Beginning the challenge and trying to get the first step down at the very least. I will have a good amount to do Monday to Thursday to get this done. Made a good step forward and just got to be diligent in work and spend my free time typing away at this block by block.

Its been about 3-4 hours of hard coding. We have just about everything done now thanks to a variety of outside help such as getting good advice from classmates and seeing similar iterations of earthquake api pulls on stackOverflow. Much thanks to chatGPT for helping restructure my code cause lord knows its horrible to see the live webpage go blank after making a single edit to the legend. The bar isn't showing up next to the depth numbers and I am not sure what the error is. Will keep trying to solve that error but otherwise we have completed part 1 about 95% of the way.

Thank you so much Alex the TA, he was up to help me at 11PM. I am exhausted and still need to grind very hard on my project but at least we are one more step closer to finishing.

Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

Part 1: Create the Earthquake Visualization
[Alt text](2-BasicMap.png)

Your first task is to visualize an earthquake dataset. Complete the following steps:

Get your dataset. To do so, follow these steps:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:
[Alt text](3-Data.png)

When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:
![Alt text](4-JSON.png)
Import and visualize the data by doing the following:

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

Hint: The depth of the earth can be found as the third coordinate for each earthquake.

Include popups that provide additional information about the earthquake when its associated marker is clicked.

Create a legend that will provide context for your map data.

Your visualization should look something like the preceding map.