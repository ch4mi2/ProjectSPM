const GlaucomaUpload = () => {
  return (
    <form className="h-[100vh]">
      <label htmlFor="file" className=" bg-sky-300">
        Upload File
      </label>
      <input type="file" id="file" name="file" />
    </form>
  );
};

export default GlaucomaUpload;
