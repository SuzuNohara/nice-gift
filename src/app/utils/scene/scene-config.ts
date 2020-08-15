export interface SceneConfig{
    hour: string; // day, night
    rainbow?: boolean;
    moon?: number; // 0-null, 1-quarter, 2-half, 3-full
    stars?: boolean;
    sun?: boolean;
    land: number; // 0-mountains, 1-bulding, 2-grass
    clouds?: number;
    rain?: boolean;
    message?: string;
    message_size?: number;
    message_align?: string;
    footer?: string;
    footer_size?: number;
    footer_align?: string;
    footer_action?: string;
    header?: string;
    header_size?: number;
    header_align?: string;
    hearts?: string;
}