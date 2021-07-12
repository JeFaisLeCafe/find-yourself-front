import DataFetcherDisplayer from "../../components/DateFetcherDisplayer";
import { Controller, useForm } from "react-hook-form";
import Select from "../../components/Select";
import { useState, useEffect } from "react";
import { Squares } from "react-activity";
import { Pole } from "../../types";

const Edit: React.FC = () => {
  const [poles, setPoles] = useState([]);
  const [isLoading, setIsLoading] = useState<any>(undefined);

  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:3000/poles")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setPoles(myJson);
        setIsLoading(false);
      });
  }, []);

  const { register, handleSubmit, watch, control } = useForm();

  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  if (isLoading)
    return (
      <div>
        <Squares />
      </div>
    );

  return (
    <div>
      <h2>Edit</h2>
      <DataFetcherDisplayer dataName="poles" />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          placeholder="When in doubt, I tend to..."
          {...register("question")}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <section>
          <label>React Select</label>
          <Controller
            name="Pole"
            control={control}
            render={({ field }) => (
              <Select
                label="Pole"
                {...field}
                options={poles.map((pole: Pole) => {
                  return { value: pole.name, label: pole.name.toUpperCase() };
                })}
              />
            )}
          />
        </section>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Edit;
