# TcHmiColorInput
A simple color input control for TwinCAT HMI

![2023-10-27_15-52-16](https://github.com/harisawan03/TcHmiColorInput/assets/19915615/2680ff1d-3fc0-465f-8ee5-fddb03cc7893)

The basic HTML color input element added to TwinCAT HMI. Added is the capability of reading and writing color values to and from HMI Symbols.

v1.0.0 built in TE2000 1.12.760.48 and must be used in equal or greater versions.

## Getting Started

Ensure TE2000 v1.12.760.48+ is installed and all System Requirements are met for TwinCAT HMI Engineering.

Download TE2000: [https://www.beckhoff.com/en-us/support/download-finder/search-result/?download_group=266706964&download_item=266706975](https://www.beckhoff.com/en-us/support/download-finder/search-result/?download_group=168439936&download_item=168440538)

System Requirements: https://infosys.beckhoff.com/content/1033/te2000_tc3_hmi_engineering/2669710091.html?id=84520022315212463


### To use in a TcHMI Project
Begin by cloning this repository and opening the included project. This includes the Framework Project and a Demo HMI project. To see the control in action, simply open the Desktop.view and Liveview.

To bring the control into another project, existing or new, create a NuGet Package from the Framework Project. 

Right-click on the Framework Project in the Solution Explorer and select "Create NuGet Package" - 

![image](https://github.com/harisawan03/TcHmiColorInput/assets/19915615/ad2f01a9-6242-4207-8f06-d0b2853be97e)

Follow the prompts to build the project, then the nupkg file will be added to your local NuGet store, commonly at C:\TwinCAT\Functions\TE2000-HMI-Engineering\References

Next, in a separate TwinCAT HMI Project, right-click on the Project in Solution Explorer and select "Manage NuGet Packages" -
![image](https://github.com/harisawan03/TcHmiColorInput/assets/19915615/f43f3198-ba36-4c25-991d-6f6859c4b6ad)

Navigate to the Browse Tab and ensure Package Source, in the top right corner, is set to TwinCAT HMI Customer. Scroll down to find the TcHmiColorInput package and install it.

![image](https://github.com/harisawan03/TcHmiColorInput/assets/19915615/31b7f27a-d082-400b-9040-f4eb7efed8fd)

Finally, the control will appear in the Toolbox where you can drag and drop it onto your pages.

![image](https://github.com/harisawan03/TcHmiColorInput/assets/19915615/936abab1-c3bb-4bf8-959d-0750703acc45)
