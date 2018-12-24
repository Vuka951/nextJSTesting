import Link from 'next/link';
import Image from '../components/Image';

const About = () => (
    <div style={{fontSize: '25px', color: 'red'}}>
        <h1>The About Page</h1>
        <Link href='/'><button>Home</button></Link>
        <p>Flying Dildos</p>
        <Image/>
    </div>
);

export default About;