import React, { useEffect, useState, useRef } from 'react';
import './ContactUs.css'
import ContactUsCard from './ContactUsCard.jsx';
import useModal from '../../../subComponents/modalHook.jsx';
import ResolveModal from './Modal/ResolveModal.jsx';


  var fakeData = [
    {
      name: 'fakeName',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non. Condimentum lacinia quis vel eros donec. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Vivamus arcu felis bibendum ut tristique. Velit laoreet id donec ultrices tincidunt arcu non sodales. Vestibulum lectus mauris ultrices eros in cursus turpis. Cursus risus at ultrices mi tempus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et tortor consequat. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Sem fringilla ut morbi tincidunt augue. Massa placerat duis ultricies lacus. Purus gravida quis blandit turpis cursus in. Aliquet enim tortor at auctor.',
      date: '11/26/2022',
      dealtWith: false,
      phone: '5557655931',
      email: 'fakeemail@email.com'
    },
    {
      name: 'fakeName',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non. Condimentum lacinia quis vel eros donec. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Vivamus arcu felis bibendum ut tristique. Velit laoreet id donec ultrices tincidunt arcu non sodales. Vestibulum lectus mauris ultrices eros in cursus turpis. Cursus risus at ultrices mi tempus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et tortor consequat. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Sem fringilla ut morbi tincidunt augue. Massa placerat duis ultricies lacus. Purus gravida quis blandit turpis cursus in. Aliquet enim tortor at auctor.',
      date: '11/26/2022',
      dealtWith: false,
      phone: '5557655931',
      email: 'fakeemail@email.com'
    },
    {
      name: 'fakeName',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non. Condimentum lacinia quis vel eros donec. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Vivamus arcu felis bibendum ut tristique. Velit laoreet id donec ultrices tincidunt arcu non sodales. Vestibulum lectus mauris ultrices eros in cursus turpis. Cursus risus at ultrices mi tempus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et tortor consequat. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Sem fringilla ut morbi tincidunt augue. Massa placerat duis ultricies lacus. Purus gravida quis blandit turpis cursus in. Aliquet enim tortor at auctor.',
      date: '11/26/2022',
      dealtWith: false,
      phone: '5557655931',
      email: 'fakeemail@email.com'
    },
    {
      name: 'fakeName',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non. Condimentum lacinia quis vel eros donec. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Vivamus arcu felis bibendum ut tristique. Velit laoreet id donec ultrices tincidunt arcu non sodales. Vestibulum lectus mauris ultrices eros in cursus turpis. Cursus risus at ultrices mi tempus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et tortor consequat. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Sem fringilla ut morbi tincidunt augue. Massa placerat duis ultricies lacus. Purus gravida quis blandit turpis cursus in. Aliquet enim tortor at auctor.',
      date: '11/26/2022',
      dealtWith: false,
      phone: '5557655931',
      email: 'fakeemail@email.com'
    },
    {
      name: 'fakeName',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non. Condimentum lacinia quis vel eros donec. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Vivamus arcu felis bibendum ut tristique. Velit laoreet id donec ultrices tincidunt arcu non sodales. Vestibulum lectus mauris ultrices eros in cursus turpis. Cursus risus at ultrices mi tempus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et tortor consequat. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Sem fringilla ut morbi tincidunt augue. Massa placerat duis ultricies lacus. Purus gravida quis blandit turpis cursus in. Aliquet enim tortor at auctor.',
      date: '11/26/2022',
      dealtWith: false,
      phone: '5557655931',
      email: 'fakeemail@email.com'
    },
    {
      name: 'fakeName',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non. Condimentum lacinia quis vel eros donec. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Vivamus arcu felis bibendum ut tristique. Velit laoreet id donec ultrices tincidunt arcu non sodales. Vestibulum lectus mauris ultrices eros in cursus turpis. Cursus risus at ultrices mi tempus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et tortor consequat. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Sem fringilla ut morbi tincidunt augue. Massa placerat duis ultricies lacus. Purus gravida quis blandit turpis cursus in. Aliquet enim tortor at auctor.',
      date: '11/26/2022',
      dealtWith: true,
      phone: '5557655931',
      email: 'fakeemail@email.com'
    },
    {
      name: 'fakeName',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non. Condimentum lacinia quis vel eros donec. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Vivamus arcu felis bibendum ut tristique. Velit laoreet id donec ultrices tincidunt arcu non sodales. Vestibulum lectus mauris ultrices eros in cursus turpis. Cursus risus at ultrices mi tempus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et tortor consequat. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Sem fringilla ut morbi tincidunt augue. Massa placerat duis ultricies lacus. Purus gravida quis blandit turpis cursus in. Aliquet enim tortor at auctor.',
      date: '11/26/2022',
      dealtWith: false,
      phone: '5557655931',
      email: 'fakeemail@email.com'
    },
    {
      name: 'fakeName',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non. Condimentum lacinia quis vel eros donec. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Vivamus arcu felis bibendum ut tristique. Velit laoreet id donec ultrices tincidunt arcu non sodales. Vestibulum lectus mauris ultrices eros in cursus turpis. Cursus risus at ultrices mi tempus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et tortor consequat. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Sem fringilla ut morbi tincidunt augue. Massa placerat duis ultricies lacus. Purus gravida quis blandit turpis cursus in. Aliquet enim tortor at auctor.',
      date: '11/26/2022',
      dealtWith: false,
      phone: '5557655931',
      email: 'fakeemail@email.com'
    },
    {
      name: 'fakeName',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non. Condimentum lacinia quis vel eros donec. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Vivamus arcu felis bibendum ut tristique. Velit laoreet id donec ultrices tincidunt arcu non sodales. Vestibulum lectus mauris ultrices eros in cursus turpis. Cursus risus at ultrices mi tempus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et tortor consequat. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Sem fringilla ut morbi tincidunt augue. Massa placerat duis ultricies lacus. Purus gravida quis blandit turpis cursus in. Aliquet enim tortor at auctor.',
      date: '11/26/2022',
      dealtWith: false,
      phone: '5557655931',
      email: 'fakeemail@email.com'
    },
    {
      name: 'fakeName',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non. Condimentum lacinia quis vel eros donec. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Vivamus arcu felis bibendum ut tristique. Velit laoreet id donec ultrices tincidunt arcu non sodales. Vestibulum lectus mauris ultrices eros in cursus turpis. Cursus risus at ultrices mi tempus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et tortor consequat. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Sem fringilla ut morbi tincidunt augue. Massa placerat duis ultricies lacus. Purus gravida quis blandit turpis cursus in. Aliquet enim tortor at auctor.',
      date: '11/26/2022',
      dealtWith: true,
      phone: '5557655931',
      email: 'fakeemail@email.com'
    },
    {
      name: 'fakeName',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non. Condimentum lacinia quis vel eros donec. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Vivamus arcu felis bibendum ut tristique. Velit laoreet id donec ultrices tincidunt arcu non sodales. Vestibulum lectus mauris ultrices eros in cursus turpis. Cursus risus at ultrices mi tempus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et tortor consequat. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Sem fringilla ut morbi tincidunt augue. Massa placerat duis ultricies lacus. Purus gravida quis blandit turpis cursus in. Aliquet enim tortor at auctor.',
      date: '11/26/2022',
      dealtWith: true,
      phone: '5557655931',
      email: 'fakeemail@email.com'
    },
    {
      name: 'fakeName',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non. Condimentum lacinia quis vel eros donec. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Vivamus arcu felis bibendum ut tristique. Velit laoreet id donec ultrices tincidunt arcu non sodales. Vestibulum lectus mauris ultrices eros in cursus turpis. Cursus risus at ultrices mi tempus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et tortor consequat. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Sem fringilla ut morbi tincidunt augue. Massa placerat duis ultricies lacus. Purus gravida quis blandit turpis cursus in. Aliquet enim tortor at auctor.',
      date: '11/26/2022',
      dealtWith: false,
      phone: '5557655931',
      email: 'fakeemail@email.com'
    },
    {
      name: 'fakeName',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non. Condimentum lacinia quis vel eros donec. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Vivamus arcu felis bibendum ut tristique. Velit laoreet id donec ultrices tincidunt arcu non sodales. Vestibulum lectus mauris ultrices eros in cursus turpis. Cursus risus at ultrices mi tempus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nec nam aliquam sem et tortor consequat. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Sem fringilla ut morbi tincidunt augue. Massa placerat duis ultricies lacus. Purus gravida quis blandit turpis cursus in. Aliquet enim tortor at auctor.',
      date: '11/26/2022',
      dealtWith: false,
      phone: '5557655931',
      email: 'fakeemail@email.com'
    }

  ]


export default function ContactUs() {



  const {isShowing, toggle} = useModal();

  const [currentContact, setContact] = useState({});



  var notDealtWith = fakeData.filter((contact) => {
    if(!contact.dealtWith) return true
  })

  var dealtWith = fakeData.filter((contact) => {
    if(contact.dealtWith) return true
  })

  return (
    <div className="contactUsContainer">
      <div className="medium-heading">Contact Us</div>
      <div className="cuCardContainer">
        {notDealtWith.map((contact) => {
          return <ContactUsCard
          contact={contact}
          key={Math.random()}
          setContact={setContact}
          toggle={toggle}
          />
        })}
        {dealtWith.map((contact) => {
          return <ContactUsCard
          contact={contact}
          key={Math.random()}
          setContact={setContact}
          toggle={toggle}
          />
        })}
      </div>
      <div id="ResolveFlex">
        <ResolveModal
        isShowing={isShowing}
        toggle={toggle}
        contact={currentContact}/>
      </div>
    </div>
  )
}