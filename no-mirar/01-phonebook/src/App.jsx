import ContactCard from './components/ContactCard'

const contacts = [{
  name: "Mr. Whiskerson",
  avatar: "http://placekitten.com/100/100",
  phone: "(212) 555-1234",
  email: "mr.whikerson@gmail.com"
}, {
  name: "Fluffykins",
  phone: "(212) 555-2345",
  email: "flffykins@gmail.com"
}, {
  name: "Destroyer",
  phone: "(212) 555-3456",
}]


function App() {
  return (
    <div className="contact-list">
      {contacts.map((contact) =>
          <ContactCard 
            key={contact.phone}
            name={contact.name}
            avatar={contact.avatar}
            phone={contact.phone}
            email={contact.email}
          />
        )}
    </div>
  )
}

export default App
