import { useNavigate, useSearchParams } from "react-router"
import exchangeAuth from "../services/exchangeAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import { IExchangeAuth } from "../types/IExchangeAuth";

const ExchangeToken = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IExchangeAuth>()

    const onSubmit: SubmitHandler<IExchangeAuth> = async (data) => {
        try {
            await exchangeAuth(data)
            navigate("/")
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div><h1>
            ExchangeToken
        </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="client_id">Client ID</label>
                    <input {...register("client_id", { required: true })} />
                    {errors.client_id && <span>This field is required</span>}
                </fieldset>
                <fieldset>
                    <label htmlFor="client_secret">Client SECRET</label>
                    <input {...register("client_secret", { required: true })} />
                    {errors.client_secret && <span>This field is required</span>}
                </fieldset>
                <fieldset>
                    <label htmlFor="code">Code</label>
                    <input {...register("code", { required: true })} value={searchParams.get("code") ?? ""} />
                    {errors.code && <span>This field is required</span>}
                </fieldset>

                <button type="submit" >Submit</button>
            </form>

        </div>
    )
}

export default ExchangeToken