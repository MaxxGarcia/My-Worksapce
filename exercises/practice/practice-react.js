// const header = React.createElement("h1", {id: "header", class: "header"}, "Hello World")

// const header = React.createElement("header", {class: "header"}, 
//     React.createElement("h1", {}, "My App"));
// const content = React.createElement("section", {class: "content-wrapper"}, 
//     React.createElement("h1", {}, "Blog Title"));
// const app = React.createElement("div", {id: "wrapper"}, [header, content])

const app = (
<div>
    <header>
        <h1> Hey Yoooo </h1>
     </header>
     <section>
         <h3>Blog Title</h3>
    </section>
</div>
)


ReactDOM.render(app, document.getElementById("root"));