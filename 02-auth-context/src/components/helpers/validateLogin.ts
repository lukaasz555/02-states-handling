interface ILoginData {
	email: string;
	password: string;
}

export type ApiRes = {
	isSuccess: boolean;
	isError: boolean;
	message: string;
};

export function validateLogin(loginData: ILoginData): Promise<ApiRes> {
	return new Promise((resolve) => {
		setTimeout(() => {
			const res = {} as ApiRes;
			if (
				loginData.email === 'jankowalski@gmail.com' &&
				loginData.password === 'admin12345@'
			) {
				Object.assign(res, {
					isSuccess: true,
					isError: false,
					message: 'Login success!',
				});
			} else
				Object.assign(res, {
					isSuccess: false,
					isError: true,
					message: 'Wrong credentials',
				});
			resolve(res);
		}, 999);
	});
}
