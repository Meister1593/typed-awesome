/** @noSelfInFile @noResolution */
declare module "awful" {
    interface Tooltip {
        wibox: any,
        visible: boolean,
        align: string,
        shape: any,
        mode: string,
        preferred_positions: Array<string>,
        preferred_alignments: Array<string>,
        text: string,
        margins: number,
        border_width: number,
        border_color: string,
        margins_leftright: number,
        margins_topbottom: number
    }

    interface TooltipData {
        timer_function: () => string
        timeout: number, // default 1
        objects?: Array<any>
        delay_show?: number,
        margin_leftright: number, // default apply_dpi(5)
        margin_topbottom: number, // default apply_dpi(5)
        shape: any, // default nil
        bg?: string,
        fg?: string,
        border_color?: string,
        border_width?: number,
        align?: string,
        font?: string,
        opacity?: number
    }
    function tooltip(tooltipData: TooltipData): Tooltip
}