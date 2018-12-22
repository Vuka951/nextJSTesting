import Link from 'next/link';

const About = () => (
    <div style={{fontSize: '25px', color: 'red'}}>
        <h1>The About Page</h1>
        <Link href='/'>Home</Link>
        <p>Flying Dildos</p>
    </div>
);

export default About;