

export interface Hospital {
    name: string;
    location: string;
    image: string;
}

export const hospitals: Hospital[] = [
  {
    name: "Medanta",
    location: "Mumbai",
    image:
      "https://ehealth.eletsonline.com/wp-content/uploads/2009/07/best-hospital-in-south-india.jpg",
  },
  {
    name: "Fortis",
    location: "Bangalore",
    image:
      "https://clinicsoncall.com/wp-content/uploads/2021/05/bolnicza-fortis-bangalor-korpus.jpg",
  },
  {
    name: "Apollo Hospitals",
    location: "Chennai",
    image:
      "https://medtravelhelp.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-08-31-at-9.45.00-AM.jpeg",
  },
  {
    name: "Anna Hospitals",
    location: "Chennai",
    image:
      "https://ehealth.eletsonline.com/wp-content/uploads/2009/07/best-hospital-in-south-india.jpg",
  },
  {
    name: "Matrix Hospitals",
    location: "Bangalore",
    image:
      "https://ehealth.eletsonline.com/wp-content/uploads/2009/07/best-hospital-in-south-india.jpg",
  },
  {
    name: "Manipal Hospitals",
    location: "Bangalore",
    image: 'https://avocure-uploads.s3.amazonaws.com/uploads/clinic/cover_pic_url/47/manipal-hospital-bangalore-1481708155-5851127b1ff31.jpg'
  },
  {
    name: "LilaVati Hospitals",
    location: "Mumbai",
    image:
      "https://contactinformation.in/wp-content/uploads/2018/08/Lilavati-Hospital-Mumbai-1.jpg",
  },
];


export const doctors = [
  {
    name: 'Dr. Wade W.',
    domain: 'Cardiologist'
  },
  {
    name: 'Dr. Litham A.',
    domain: 'Paediatrician'
  },
  {
    name: 'Dr. Robert F.',
    domain: 'Nephrologist'
  },
  {
    name: 'Dr. Krish W.',
    domain: 'Neurologist'
  }
]

export const sections = [
  {
    heading: "We've got a team of licensed healthcare professionals who are dedicated to providing excellent medical assistance through our app."
  },
  {
    heading: "Book an appointment for an in-clinic consultation",
    subHeading: "Experience personalized healthcare services at a location of your choice within our extensive network of strategically placed clinics. Book your in-depth, in-clinic consultation now."
  }
]