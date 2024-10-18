interface props {
  children: React.ReactNode;
}

export default function Container(props: props) {
  return (
    <div className="max-w-screen-xl h-screen mx-auto mt-20 mb-20">
      {props.children}
    </div>
  );
}
