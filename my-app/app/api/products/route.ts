import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import productsData from "@/data/products.json";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "0");
    const pageSize = parseInt(searchParams.get("pageSize") || "10");

    const allProducts = productsData.products;
    const totalCount = allProducts.length;
    const pageCount = Math.ceil(totalCount / pageSize);

    const startIndex = page * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = allProducts.slice(startIndex, endIndex);

    return NextResponse.json({
      data: paginatedProducts,
      pagination: {
        pageIndex: page,
        pageSize,
        totalCount,
        pageCount,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
