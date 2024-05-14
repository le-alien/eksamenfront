import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const Headerxl: React.FC<Props> = ({ children }) => {
    return (
        <h2 className="text-xl">
            {children}
        </h2>
    )
}

export default Headerxl