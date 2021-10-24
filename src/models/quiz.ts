export interface Quiz {
	question : string;
	answer: {
		answers: string,
		options: string,
		correct: boolean
	}
}
