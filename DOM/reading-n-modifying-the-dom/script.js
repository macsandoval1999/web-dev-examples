document.querySelector("input").addEventListener("click", () => {

    // document.getElementsByTagName("h2") returns a NodeList of the <h2> elements in the document, and the first is number 0. The item() method returns the element at the specified index. Here we get the first <h2> element.
    const header = document.getElementsByTagName("h2").item(0);

    // The firstChild of the header is a Text node. The data property of a Text node contains the text content. Here we change it to "A dynamic document".
    header.firstChild.data = "A dynamic document";
    // Now header is "A dynamic document".

    // Access the first paragraph element
    const para = document.getElementsByTagName("p").item(0);
    para.firstChild.data = "This is the first paragraph.";

    // Create a new Text node for the second paragraph. The createTextNode() method creates a new Text node with the specified text content. Here we create a Text node with the content "This is another paragraph." This method can be used to create text nodes for any element.
    const newText = document.createTextNode("This is another paragraph.");

    // Create a new Element to be the next paragraph
    const newElement = document.createElement("p");

    // Put the text in the paragraph
    newElement.appendChild(newText);

    // Put the paragraph on the end of the document by appending it to the body (which is the parent of para). para is the existing first paragraph as stated above. parentNode is a method used to access the parent element of an element. Here we append the new paragraph to the same parent as para.
    para.parentNode.appendChild(newElement);
    // Now the document has a new paragraph appended after the first paragraph. 
});