import css from './index.module.css'

export default function newComponent() {
    const doc = document.createElement("div");
    doc.innerHTML = "Hello world from new component";
    doc.className = css.new;
    document.body.appendChild(doc);
    return doc
}
