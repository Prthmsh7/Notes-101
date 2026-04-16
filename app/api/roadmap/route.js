export async function GET() {
  return Response.json({
    status: "ok",
    name: "Notes-101 roadmap",
    stack: ["Next.js", "Node.js"],
    items: [
      "Responsive layout practice",
      "JavaScript revision",
      "Backend route building"
    ]
  });
}
