
export default function Item(props) {
    return (
        <li className="bg-red-300 text-black border-5 border-blue-500 rounded-[10px] m-4 pl-[10px]">
            <div><span className="font-bold text-[20px]">Name: </span>{props.name}</div>
            <div><span className="font-bold text-[16px]">Quantity: </span>{props.quantity}</div>
            <div><span className="font-bold text-[16px]">Category: </span> {props.category}</div>
        </li>
    )
}

// Item Running props instead of name, quantity, category (NQC) so when adding those object in it should be props.NQC instead of just NQC
//bg = background, rounded = border radius, font-bold make whatever in the span content go BOLD. 
//Text if you want to do px size should be within [ ] example  [16px] not just 16px.