export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
}

export type BuildMode = 'development' | 'production';
export type BuildPlatform = 'mobile' | 'deskstop';

export interface BuildOptions {
    port: number;
    paths: BuildPaths;
    mode: BuildMode;
    analyzer?: boolean;
    platform: BuildPlatform
}