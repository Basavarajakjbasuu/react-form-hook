import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

interface FormValues {
	username: string;
	email: string;
	channel: string;
}

const schema = z.object({
  username: z.string().min(1, { message: 'username is required' }),
  email: z.string().email({message: "Invalid email"}),
  channel: z.string().min(1, { message: "channel is required"})
});
const ZodForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormValues>({
		defaultValues: {
			username: '',
			email: '',
			channel: '',
		},
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: FormValues) => {
		console.log('form data', data);
	};
	return (
		<div className="flex flex-col items-center mt-10 gap-y-10 px-4 pb-6">
			<h2 className="text-5xl font-bold text-red-600">Zod Youtube Form</h2>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col border-2 p-4 rounded w-[300px] "
				noValidate //prevent browser validation
			>
				<input
					type="text"
					placeholder="username"
					id="username"
					{...register('username')}
					className="p-2 mt-2 border-2 rounded focus:outline-none bg-gray-300 text-black"
				/>

				{errors && <p className="text-red-600">{errors.username?.message}</p>}

				<input
					type="email"
					placeholder="email"
					id="email"
					{...register('email')}
					className="p-2 mt-2 border-2 rounded focus:outline-none bg-gray-300 text-black"
				/>
				{errors && <p className="text-red-600">{errors.email?.message}</p>}

				<input
					type="text"
					placeholder="channel"
					id="channel"
					{...register('channel')}
					className="p-2 mt-2 border-2 rounded focus:outline-none bg-gray-300 text-black"
				/>
				{errors && <p className="text-red-600">{errors.channel?.message}</p>}

				<div className="grid place-items-center ">
					<button className="bg-red-600 mt-3 max-w-min p-2 px-8 rounded text-white">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default ZodForm;
