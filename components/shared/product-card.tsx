

import { Link, Plus } from "lucide-react";
import { Title } from "./title";
import { Button } from "../ui";
interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({id, name, price, imageUrl, className }) => {
    return (
        <Link href={`/product/${id}`}>
            <div className={className}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img src={imageUrl} alt={name} width={215} height={215} />
                </div>

                <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
                <p className="text-sm text-gray-400">
                    Цыпленок, ветчина, сыр, помидор, сырный соус,
                    томатный соус, моцарелла
                </p>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-[20px]">
                        от <b>{price} ₽</b>
                    </span>

                    <Button variant={"secondary"}>
                        <Plus size={20} className="mr-1" /> 
                            Добавить    
                    </Button>
                </div>
            </div>
        </Link>
    );
};

