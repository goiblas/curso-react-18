import { useState, useMemo, useTransition } from 'react';
const fibonacci = (n) => {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
export default function Demo() {
    const [num, setNum] = useState(1);
    const [name, setName] = useState('');
    const [isPending, startTransition] = useTransition();

    console.time('fib');
    const fib = useMemo(() =>fibonacci(num), [num]);
    console.timeEnd('fib');

    const handleIncrement = () => {
        startTransition(() => {
            setNum(num + 10);
        });
    }

    return (
        <div>
            <h1>Name: {name}</h1>
            <input type="text" value={name} onChange={ev => setName(ev.target.value)} />
            <hr />
            <h1>Fibonacci: {fib}</h1>
            <button disabled={isPending} onClick={handleIncrement}>Increment 10</button>
            <input type="number" value={num} onChange={ev => setNum(ev.target.value)} />
        </div>
    )
}