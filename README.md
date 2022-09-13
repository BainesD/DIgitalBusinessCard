
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Digital Business Card

This is a digital business card designed using React.js and CSS. The task of creating this business card was part of a FreeCodeCamp tutorial showing the basics of React and how to use it to create static pages. The project files are split into two folders.

## Public

The public folder was mostly left untouched for this project. This public folder exists in a similar state to all react apps created using the following command.

```
npx create-react-app {app-name}
```

The only file modified for this project is the index.html file. Modifications were made to reference the css stylesheet and javascript logic file.

## Src

The src file is where most of the work took place the src file is split into three subsections:
<br />
The main contents,
<br />
The components folder,
<br />
and the images folder.
<br /><br />
In the main folder one will find the index.css and index.js files. The index.css contains all formatting and style rules for the classes and tags while the index.js file makes calls to the different components which hold the JSX creating behind the business card.

### Components

The components folder contains one parent component, Container.js, which holds four children components. Each of the children components creates a different part of the business card respective to their name. For instance, the Contact.js component creates the section immediately below the main image which sits at the top of the container. Each component is then called into the container, rendered, and, finally, the whole container is rendered by ReactDOM in the index.js file.

### Images

The images file is exactly as it sounds. It is used to store the images used throughout the business card. 

