const contacts = [
    {
        name : "Georgio Jabbour",
        post : "Owner",
        phoneNumber : "+961 71861376",
        email : "georgiojabbour.g.gj@gmail.com",
    },
    {
        name : "Don Corleone",
        post : "Chef",
        phoneNumber : "+961 75434567",
        email : "vitocorleone.c.vc@gmail.com",
    },
]

function loadContacts(){
    const content = document.getElementById("content");
    content.innerHTML = ""

    const contactsSection = document.createElement("div");
    contactsSection.classList.add("contacts");

    const sectionTitle = document.createElement("h3");
    sectionTitle.innerText = "Contact Us";

    contactsSection.appendChild(sectionTitle);

    const contactsContainer = document.createElement("div");
    contactsContainer.classList.add("contacts-container");

    contacts.forEach(contactItem => {
        const contact = createContact(contactItem.name , contactItem.post , contactItem.phoneNumber , contactItem.email);
        contactsContainer.appendChild(contact);
    })

    contactsSection.appendChild(contactsContainer);

    content.appendChild(contactsSection)
}

function createContact(name , post , number , email)
{
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const namePara = document.createElement("p");
    namePara.classList.add("name");
    namePara.innerText = name;
    contact.appendChild(namePara);

    const postPara = document.createElement("p");
    postPara.classList.add("post");
    postPara.innerText = post;
    contact.appendChild(postPara);


    const numberPara = document.createElement("p");
    numberPara.classList.add("number");
    numberPara.innerText = number;
    contact.appendChild(numberPara);


    const emailPara = document.createElement("p");
    emailPara.classList.add("email");
    emailPara.innerText = email;
    contact.appendChild(emailPara);

    return contact;

}

export {loadContacts};