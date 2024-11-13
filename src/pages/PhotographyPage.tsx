import {Link, Element} from 'react-scroll';


export default function PhotographyPage() {
  return (
    <>
      Photography
      <nav>
        <ul>
          <li>
            <Link to="section1" smooth={true} duration={500}>Section 1</Link>
          </li>
          <li>
            <Link to="section2" smooth={true} duration={500}>Section 2</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <TripA/>
      <TripB/>
    </>

  );
}

const TripA = () => {
  return (
    <Element name="section1">
      <section style={{height: '50vh', backgroundColor: 'lightblue'}}>
        <h1>Section 1</h1>
        <p>This is the content of section 1</p>
      </section>
    </Element>
  );
}

const TripB = () => {
  return (
    <Element name="section2">
      <section style={{height: '50vh', backgroundColor: 'lightgreen'}}>
        <h1>Section 2</h1>
        <p>This is the content of section 2</p>
      </section>
    </Element>
  );
}