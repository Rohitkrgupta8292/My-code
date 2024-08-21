import NotFound from "@/app/not-found";
export default function Page({ params }) {
  //fetch your blog by slug
//   throw new Error("error hai")
  console.log(params)
  return <div>I am about page check console</div>
  // return <div>My Post: {params.slug}</div>
}
