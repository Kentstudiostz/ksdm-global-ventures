
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Eye, Edit, Trash2, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  category: string;
  image: string;
  date: string;
  new?: boolean;
  sale?: boolean;
}

interface ProductsTableProps {
  products: Product[];
}

const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <div className="bg-white rounded-md border shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Image</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Added</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                No products found
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="w-12 h-12 rounded-md overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  {product.salePrice ? (
                    <div>
                      <span className="text-muted-foreground line-through mr-2">
                        ₱{product.price.toFixed(2)}
                      </span>
                      <span className="text-red-600 font-medium">
                        ₱{product.salePrice.toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <span>₱{product.price.toFixed(2)}</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {product.new && (
                      <Badge variant="default" className="bg-ksdm-navy">New</Badge>
                    )}
                    {product.sale && (
                      <Badge variant="default" className="bg-red-600">Sale</Badge>
                    )}
                    {!product.new && !product.sale && (
                      <Badge variant="outline">Regular</Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(product.date), { addSuffix: true })}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link to={`/product/${product.id}`} target="_blank" className="flex items-center">
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
