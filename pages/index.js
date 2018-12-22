import Link from 'next/link';
const Index = () => (
    <div>
        <h1>SSR Magic</h1>
        <Link href='./about'>About</Link>
        {/* <a href='./about'>About</a> */}
    </div>
);

export default Index;