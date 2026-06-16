import { StyleSheet } from 'react-native';
import { COLORS, SPACING, FONTS } from './Theme';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBg,
    marginBottom: SPACING.lg,
    borderRadius: SPACING.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.sm,
    gap: SPACING.md,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: SPACING.sm,
    backgroundColor: COLORS.border,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: FONTS.standard,
    fontWeight: FONTS.semiBold,
    color: COLORS.primary,
    lineHeight: FONTS.lineHeight,
  },
  // --- Below this point slide 32 was cut off; reconstructed to match the
  // card screenshot (used by components/Card.js): timestamp + TRENDING row,
  // snippet text and the author line.
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.xs,
  },
  timestamp: {
    fontSize: FONTS.small,
    color: COLORS.secondary,
  },
  category: {
    fontSize: FONTS.small,
    fontWeight: FONTS.semiBold,
    color: COLORS.accent2,
    letterSpacing: 1,
  },
  snippet: {
    fontSize: FONTS.small,
    color: COLORS.secondary,
    lineHeight: FONTS.lineHeight,
    marginVertical: SPACING.xs,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    fontSize: FONTS.small,
    fontWeight: FONTS.semiBold,
    color: COLORS.accent,
    letterSpacing: 0.5,
  },
});
