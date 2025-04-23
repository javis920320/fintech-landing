"use client"
import { Product } from "../../types/product";
import products from "../../data/products.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import styled from "styled-components";

type Params = {
  params: {
    id: string;
  };
};

const Section = styled.div.attrs({
  className:
    "w-full max-w-3xl bg-[#1D1B2A] text-white rounded-2xl p-8 sm:p-10 border border-[#3D2C8D] flex flex-col gap-6 shadow-[0_0_20px_rgba(93,52,230,0.3)]",
})``;

const Title = styled.h1.attrs({
  className: "text-3xl sm:text-4xl font-bold text-center",
})``;

const Info = styled.div.attrs({
  className: "space-y-4 text-base sm:text-lg",
})``;

const InfoItem = styled.p.attrs({
  className: "flex items-center gap-2",
})``;

const BackLink = styled(Link).attrs({
  className: "text-indigo-400 hover:underline text-sm sm:text-base",
})``;

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product: Product | undefined = products.find((p) => p.id === resolvedParams.id);    


  if (!product) return notFound();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B0B16] p-4 sm:p-8">
      <Section>
        <Title>{product.name}</Title>
        <Info>
          <InfoItem>
            <strong>Tipo:</strong> {product.category}
          </InfoItem>
          <InfoItem>
            <strong>Categoría:</strong> {product.category}
          </InfoItem>
          <InfoItem>
            <strong>Tasa de interés:</strong> {product.interestRate ?? "No aplica"}
          </InfoItem>
          <InfoItem>
            <strong>Nivel de riesgo:</strong> {product.riskLevel}
          </InfoItem>
        </Info>
        <BackLink href="/">← Volver al catálogo</BackLink>
      </Section>
    </div>
  );
}