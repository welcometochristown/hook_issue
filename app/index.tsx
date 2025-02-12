import { Button, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";

interface IFormComponentsProps {
    defaultValues: IFormValues;
}

interface IFormValues {
    name: string;
}

const FormComponent: React.FC<IFormComponentsProps> = ({ defaultValues }) => {
    const form = useForm<IFormValues>({ defaultValues });
    const { handleSubmit } = form;

    const onSubmit = (values: IFormValues) => {
        console.log("dummySubmit fired!", { values });
    };

    return (
        <View>
            <Controller
                control={form.control}
                render={({ field: { value, onChange } }) => (
                    <TextInput style={{ backgroundColor: "white" }} value={value} onChangeText={onChange} />
                )}
                name={"name"}
            />
            <Button
                onPress={() => {
                    console.log("OnPress - Start");
                    handleSubmit(onSubmit, (errors) => console.error(errors));
                    console.log("OnPress - End");
                }}
                title="submit"
            />
        </View>
    );
};

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <FormComponent defaultValues={{ name: "joe" }} />
        </View>
    );
}
