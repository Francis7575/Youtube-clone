export type CommonProps = {
    onSearchClick: () => void;
    isInputVisible: boolean;
    onGoBackClick: () => void;
    isSearchVisible: boolean;
    onUserIconClick: () => void;
    isUserOptionsVisible: boolean;
    onLogout: () => void;
    loggedIn: boolean;
    username: string;
};

export type SearchInputProps = CommonProps;

export type NavbarProps = CommonProps & {
    isLogoVisible: boolean
}

export type LogoProps = {
    isLogoVisible: boolean
}

export type LoginData = {
    email: string,
    password: string
    [key: string]: string | number;
}

export type LoginProps = {
    onLogin: (data: LoginData, rememberMe: boolean) => void
}

export type SignupData = {
    username: string,
    email: string,
    password: string,
    [key: string]: string | number
}

export type SignupProps = {
    onSignup: (data: SignupData) => void
}

export type HomeProps = {
    onLogout: () => void
    loggedIn: boolean
    username: string
}

export type VideoCardProps = {
    video: string
    id: string
    snippet: {}
}

export type searchData = {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            high: {
                url: string;
            }
        }
        channelTitle: string;
        publishTime: string;
    }
}

export type SidebarProps = {
    selectedCategory: string,
    setSelectedCategory: (data: string) => void
}

export type VideosProps = {
    selectedCategory: string,
}