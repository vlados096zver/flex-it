export interface IServices {
  img: string,
  title: string,
  text: string
}

export interface IAbout {
  img: string,
  title: string,
  text: string
}

export interface IWhy {
  title: string,
  text: string
}

export interface INumber {
  img: string,
  count: number,
  title: string
}

export interface IClient {
  img: string
}

export interface IPlan {
  img: string,
  title: string,
  count: number,
  text: string,
  most: boolean
}

export interface IFaq {
  title: string,
  text: string
}

export interface IPortfolio {
  img: string,
  title: string,
  type: string
}

export interface IBlog {
  img: string,
  date: string,
  type: string,
  fio: string,
  title: string,
  text: string
}
