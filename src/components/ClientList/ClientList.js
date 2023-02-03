import './ClientList.scss';

const clients = 
[
  {
    name:"Enabling Strategies Limited",
    addressOne: "1615 Bonanza Street, Suite 203",
    addressTwo: "Walnut Creek, CA 94596"
  },
  {
    name:"DB & NK Developments Inc",
    addressOne: "2054 Bluerock Ct.",
    addressTwo: "Concord, CA 94521"
  },
  {
    name:"Ali's Construction & Remodeling Inc",
    addressOne: "1011 De Anza Blvd",
    addressTwo: "San Jose, CA"
  }
]

const ClientList = () => {
  return (
    <section className='clients'>
      <div className='clients__content'>
        <h4 className='clients__title'> Clients </h4>
        
        <p className='clients__desc'> We are proud to work with: </p>
        
        <div className='client-cards'>
          {clients.map((client) => (
            <article className='client-card' key={client.name}>
              <h4 className='client-card__name'> {client.name} </h4>

              <div className='client-card__info'>
                <p className='client-card__address'> {client.addressOne} </p>
                <p className='client-card__city'> {client.addressTwo} </p>
              </div>
            </article>
          ))}
        </div>
      
      </div>

    </section>
  )
}

export default ClientList