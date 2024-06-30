import NotFound from "@/app/not-found";
export default function Page({ params }) {
  //fetch your blog by slug
//   throw new Error("error hai")
  let languages = ["python", "java", "javaScript", "cpp", "cs", "swift"];
  if (languages.includes(params.slug)) {
    return <div> {params.slug} </div>;
  } else {
    return <NotFound />;
  }
  // return <div>My Post: {params.slug}</div>
}
