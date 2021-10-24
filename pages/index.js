import { useEffect, useState } from 'react';

import Header from '../components/header';

export default function Home() {
    const [dark, setDark] = useState(true);
    return (
        <>
            <div className="pt-28 text-center h-screen"> Home</div>
        </>
    );
}
