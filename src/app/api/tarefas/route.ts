import { NextResponse } from "next/server";

let tarefas = [
    {"id" : 1, "titulo" : "Aprender Next"}
];

export async function GET() {
    return NextResponse.json(tarefas);
}

export async function POST(request: Request) {
    const dados = await request.json();

    tarefas.push(dados);

    return NextResponse.json(tarefas);
}