

export default function Search() {
  return (
    <form className="Search d-flex m-5">
      <input type="search" className="form-control mx-2" />
      <input
        type="submit"
        value="Search"
        className="mx-2 btn btn-outline-primary"
      />
      <button className="btn btn-primary">Map Location</button>
    </form>
  );
}
